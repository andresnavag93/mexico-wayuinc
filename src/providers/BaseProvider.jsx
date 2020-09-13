import { config } from "../config";
export const endpoint = config.endpoint.production;
/**
* METHOD GET
* Get / fetch from backend
* @export
@param {} route the second route to concatenate with the principal endpoint
@param {} headers headers to know if requires authorization or not to get information
* @returns response from get
*/
export async function method_get(route, headers = null) {
 try {
   const response = await fetch(endpoint + route, {
     method: "GET",
     headers: headers
   });
   const data = await response.json();
   return data;
 } catch (error) {
   return { error: error.message };
 }
}
/**
* HEADERS
* Headers when connection with backend is without permission
* @export
* @returns object headers
*/
export function _headers() {
 return {
   Accept: "application/json",
   "Content-Type": "application/json"
 };
}


export async function method_post(route, payload = {}, type, headers = null) {
    try {
      const response = await fetch(endpoint + route, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return { error: error };
    }
   }