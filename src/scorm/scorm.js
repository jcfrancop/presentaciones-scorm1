let api = null

function findSCORMAPI() {
  let currentWindow = window;

  for (let i = 0; i < 10; i++) {
    try {
      if (currentWindow.API) {
        return currentWindow.API;
      }

      if (currentWindow.parent === currentWindow) {
        break;
      }

      currentWindow = currentWindow.parent;
    } catch (error) {
      console.warn("SCORM: unable to access parent window");
      break;
    }
  }

  return null;
}

export function initializeSCORM() {
  api = findSCORMAPI();

  if (api){
    console.log("SCORM: API found");
    return true
  }
  else {
    console.error("SCORM: API not found");
    return false
  }
}

export function isSCORMAvailable() {
  return api !== null;
}

export function startSCORMSession() {
  if (!api) {
    console.log("SCORM: running without LMS");
    return false;
  }

  const result = api.LMSInitialize("");

  if (result === "true") {
    console.log("SCORM: session initialized");
    return true;
  }

  console.error("SCORM: failed to initialize session");
  return false;
}

export function setSCORMValue(element, value) {
  if (!api) {
    return false;
  }

  const result = api.LMSSetValue(element, value);

  return result === "true";
}

export function setProgress(value) {
  const success = setSCORMValue(
    "cmi.core.lesson_location",
    value
  );

  if (success) {
    commitSCORMSession();
  }

  return success;
}

export function getSCORMValue(element) {
  if (!api) {
    return null;
  }

  return api.LMSGetValue(element);
}

export function getProgress() {
  return getSCORMValue("cmi.core.lesson_location");
}

export function commitSCORMSession() {
  if (!api) {
    return false;
  }

  const result = api.LMSCommit("");

  return result === "true";
}

export function completeSCORM() {
  if (!api) {
    return false;
  }

  const success = setSCORMValue(
    "cmi.core.lesson_status",
    "completed"
  );

  if (success) {
    commitSCORMSession();
  }

  return success;
}

export function finishSCORMSession() {
  if (!api) {
    return false;
  }

  const result = api.LMSFinish("");

  if (result === "true") {
    console.log("SCORM: session finished");
    return true;
  }

  console.error("SCORM: failed to finish session");
  return false;
}