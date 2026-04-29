/**
 * App's current version during runtime.
 */
declare const __APP_VERSION__: string;

/**
 * Flag to determine if the app's running in staging mode.
 */
declare const __IS_STAGING__: boolean;

/**
 * Allows to recognize SVG imports.
 */
declare module '*.svg' {
  const content: string;
  export default content;
}

/**
 * Allows to recognize PNG imports.
 */
declare module '*.png' {
  const content: string;
  export default content;
}

/**
 * Allows to recognize WEBP imports.
 */
declare module '*.webp' {
  const content: string;
  export default content;
}