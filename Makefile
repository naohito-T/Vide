# ---------------------------------------------------------------#
#	  											Variables		 											     #
# ---------------------------------------------------------------#

# Makefileでの := は simply expanded variable といって一度しか展開されない。
# = は参照するたびに展開される
# コマンドの実行を変数に入れるためには
# @see https://www.nooozui.com/entry/20200129/1580277274
# debug → $(warning CFLAGS1 = $(FROM_DEPLOY_BRANCH))

# ログの色
R := \e[31m
G := \e[32m
B := \e[34m
N := \e[0m

# .envrc書き込みパス
DECODING_FRONT_PATH := dotenv ./env/decrypt/.env.

# ---------------------------------------------------------------#
#  												Setup Env 													 	 #
# ---------------------------------------------------------------#

# 暗号化
# Usage (make env.encrypt ENV=xxx KEY=xxx)
.PHONY: env.encrypt
env.encrypt:
	@make _env.encrypt KEY=$(KEY) INPUT=./env/decrypt/.env.$(ENV) OUTPUT=./env/encrypt/.env.$(ENV)

# 復号
# Usage (make env.decrypt ENV=xxx KEY=xxx)
.PHONY: env.decrypt
env.decrypt:
	@make _env.decrypt KEY=$(KEY) INPUT=./env/encrypt/.env.$(ENV) OUTPUT=./env/decrypt/.env.$(ENV)

# .envrc 作成
# Usage (make envrc.create ENV=xxx)
.PHONY: envrc.create
envrc.create:
	@make _env.makerc ENVIRONMENT=$(ENV)

# ---------------------------------------------------------------#
# 											firebase Emulator 											 #
# ---------------------------------------------------------------#

# Docker Down
.PHONY: down
down:
	docker-compose down

# firebase Emulator local setup
.PHONY: up
up:
	docker-compose down; docker-compose up -d

# Dockerfileを書き換えたあとに実行する
.PHONY: build
build:
	docker-compose build firebase

# 起動後、firebaseにログインする
.PHONY: exec
exec:
	docker-compose exec firebase bash

# login
.PHONY: login
login:
	docker-compose exec firebase firebase login --no-localhost

# Usage : firebase emulators:start --only firestore ○
# Usage : firebase emulators:start --only functions ×
# Usage : firebase emulators:start --only auth ○
.PHONY: only.start
only.start:
	docker-compose exec firebase firebase emulators:start --only $(SERVICE)


# データのExport/Import
# firebase emulators:export ./data/export_my_data -P default
# firebase emulators:start -P default --import=./data/export_my_data

# 自動auto exportのdataの場所を決めたい
.PHONY: auto.export
auto.export:
	docker-compose exec firebase emulators:start --import=path/to/export --export-on-exit


# ---------------------------------------------------------------#
#  													Deploy											 	 	 		 #
# ---------------------------------------------------------------#

# 基本 github actionでdeployするように設計されているため以下コマンドはhotfix用

.PHONY: deploy
deploy:
	@make _deploy


# ---------------------------------------------------------------#
#  													Function											 	 	 	 #
# ---------------------------------------------------------------#

# 基本 github actionでdeployするように設計されているため以下コマンドはhotfix用
_deploy:
	@printf '${B}%s\n' "# deployを開始します。";\
	cd portfolio-ui;\
	yarn build;\
	yarn deploy;
	@printf '${B}%s\n' "# deploy完了しました。";\


# 暗号化 method
_env.encrypt:
	@if [ -n "$(KEY)" ]; then\
		openssl aes-256-cbc -e -in $(INPUT) -pass pass:$(KEY) | base64 > $(OUTPUT);\
		printf '${B}%s\n' "# 鍵を暗号化し配置しました。→→$(OUTPUT)";\
	else\
		printf '${R}%s\n' "# you need define KEY.\nyou need read README.md.";\
	fi

# 復号化 method
_env.decrypt:
	@if [ -n "$(KEY)" ]; then\
		cat $(INPUT) | base64 -d | openssl aes-256-cbc -d -out $(OUTPUT) -pass pass:$(KEY);\
		printf '${B}%s\n' "# 鍵を復号化し配置しました。→→$(OUTPUT)";\
	else\
		printf '${R}%s\n' "# you need define KEY.\nyou need read README.md.";\
	fi

# .envrc 作成method
# 最初の > で.envrcを必ず上書きします。
_env.makerc:
	@if [ -n "$(ENVIRONMENT)" ]; then\
		printf '${B}%s\n' "# envを.envrcに記載";\
		echo ${DECODING_FRONT_PATH}$(ENVIRONMENT) > .envrc;\
		direnv allow;\
		printf '${B}%s\n' "# $(ENVIRONMENT)用の.envrcを作成。\n.envrc done";\
	else\
		printf '${R}%s\n' "# you need define ENVIRONMENT.\nyou need read README.md.";\
	fi
