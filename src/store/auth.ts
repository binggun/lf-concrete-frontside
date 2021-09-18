import { defineStore } from "pinia";
import { DateTime } from "luxon";

export interface authData {
  token: string;
  expires: number;
  issued: number;
  role: string;
  email: string;
}

export const useStore = defineStore("auth", {
  state: () => {
    return {
      auth: {
        token: localStorage.token || "",
        expires: +localStorage.expires || 0,
        issued: +localStorage.issued || 0,
        role: localStorage.role || "",
        email: localStorage.email || "",
      } as authData,
    };
  },
  getters: {
    isLogin(): Boolean {
      if (
        this.auth.token &&
        this.auth.token.length > 0 &&
        DateTime.fromMillis(this.auth.expires) > DateTime.now()
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  actions: {
    setAuth(
      token: string,
      issued: number,
      expires: number,
      role: string,
      email: string
    ) {
      this.auth.token = token;
      this.auth.issued = issued;
      this.auth.expires = expires;
      this.auth.role = role;
      this.auth.email = email;
      localStorage.token = token;
      localStorage.issued = issued;
      localStorage.expires = expires;
      localStorage.role = role;
      localStorage.email = email;
    },
    signOut() {
      this.auth.token = "";
      this.auth.issued = 0;
      this.auth.expires = 0;
      this.auth.role = "";
      this.auth.email = "";
      localStorage.token = "";
      localStorage.issued = 0;
      localStorage.expires = 0;
      localStorage.role = "";
      localStorage.email = "";
    },
  },
});
