import { gsap as G } from 'gsap';
import { TweenOptions } from '@/lib/types';

/**
 * @desc document.queryなどで取得した際用のtweenFactory
 */
export const generateTweenHtml = (
  el: HTMLElement | null,
  op: TweenOptions
): gsap.core.Tween | null => {
  if (!el) return null;
  return G.to(el, { ...op });
};

/**
 * @desc gsap.utils.toArray('.animation');などで取得したunknown用
 */
export const generateTweenUnknown = (
  el: unknown[] | null,
  op: TweenOptions
): gsap.core.Tween | null => {
  if (!el) return null;
  return G.to(el, { ...op });
};
