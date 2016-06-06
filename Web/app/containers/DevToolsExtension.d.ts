// A hack for the Redux DevTools Chrome extension.
interface Window {
    devToolsExtension?: () => Function;
}