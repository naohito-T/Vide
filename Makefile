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

# ---------------------------------------------------------------#
#  												setup make 													 	 #
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


# ---------------------------------------------------------------#
#  											firebase setup											 	 	 #
# ---------------------------------------------------------------#

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
