import { method_post, _headers } from "./BaseProvider";

export function method_post_mail(payload) {
  return method_post("request_contact_from_mexico/", payload, "POST", _headers());
}
