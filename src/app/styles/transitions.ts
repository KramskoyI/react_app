export const themeTransitionDurationMs = 500;

export const themeTransitionEasing = 'cubic-bezier(0.22, 1, 0.36, 1)';

export const themeSharedTransition = [
  `background-color ${themeTransitionDurationMs}ms ${themeTransitionEasing}`,
  `color ${themeTransitionDurationMs}ms ${themeTransitionEasing}`,
  `border-color ${themeTransitionDurationMs}ms ${themeTransitionEasing}`,
  `box-shadow ${themeTransitionDurationMs}ms ${themeTransitionEasing}`,
].join(', ');

export const themeColorTransition = [
  `color ${themeTransitionDurationMs}ms ${themeTransitionEasing}`,
  `opacity ${themeTransitionDurationMs}ms ${themeTransitionEasing}`,
].join(', ');

export const themeInteractiveTransition = [
  `background-color ${themeTransitionDurationMs}ms ${themeTransitionEasing}`,
  `color ${themeTransitionDurationMs}ms ${themeTransitionEasing}`,
  `transform ${themeTransitionDurationMs}ms ${themeTransitionEasing}`,
].join(', ');

export const themeSurfaceTransition = [
  `background-color ${themeTransitionDurationMs}ms ${themeTransitionEasing}`,
  `border-color ${themeTransitionDurationMs}ms ${themeTransitionEasing}`,
  `box-shadow ${themeTransitionDurationMs}ms ${themeTransitionEasing}`,
  `transform ${themeTransitionDurationMs}ms ${themeTransitionEasing}`,
].join(', ');

export const themeLinkTransition = [
  `color ${themeTransitionDurationMs}ms ${themeTransitionEasing}`,
  `background-color ${themeTransitionDurationMs}ms ${themeTransitionEasing}`,
  `border-color ${themeTransitionDurationMs}ms ${themeTransitionEasing}`,
].join(', ');
