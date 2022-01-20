
const endPoint =
"https://prod-in.100ms.live/hmsapi/spacesclone.app.100ms.live/";

export default async function getToken( role) {
    const response = await fetch(`${endPoint}api/token`, {
      method: 'POST',
      body: JSON.stringify({
        user_id: '5fc62c5872909272bf9995e1', // User ID assigned by you (different from 100ms' assigned id)
        role: role, // listener , speaker , moderator
        room_id: "61c79831a0fa766d7f542dda"
      }),
    });
  
    const { token } = await response.json();
  
    return token;
  }