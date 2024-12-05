import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    // Check if the user is online and return the status
    const [onlineStatus, setOnlineStatus] = useState(true)
    useEffect(() => {
        window.addEventListener('online', () => {
            setOnlineStatus(true);
        })
        window.addEventListener('offline', () => {
            setOnlineStatus(false);
        })
        return () => {
            window.removeEventListener('online', () => {})
            window.removeEventListener('offline', () => {});
        }
    }, [])
    return onlineStatus;
}
export default useOnlineStatus