  import UseOnlineStatus from "./cobachooks1";

  export function StatusBar() {
    const isOnline = UseOnlineStatus(navigator.onLine);
    return <h1>{isOnline ? "✅Online" : " ❌Disconnected"}</h1>;
  }

  export function SaveButton() {
    const isOnline = UseOnlineStatus(navigator.onLine);

    function handleSaveClick() {
      console.log("Progress saved");
    }

    return (
      <button disabled={!isOnline} onClick={handleSaveClick}>
        {isOnline ? "Save Progress" : "Reconnecting... "}
      </button>
    );
  }