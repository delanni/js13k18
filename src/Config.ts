export function fetchConfig(path: string) {
  fetch(path, { method: "GET", credentials: "include", cache: "no-cache" });
}

export function readConfigFromLocalStorage(tag: string) {
  const configItem = window.localStorage.getItem(`config:${tag}`);
  try {
    return JSON.parse(configItem || "{}");
  } catch (e) {
    console.error(e);
    return {};
  }
}

export function storeConfigToLocalStorage(tag: string, config: Object) {
  window.localStorage.setItem(`config:${tag}`, JSON.stringify(config));
}
