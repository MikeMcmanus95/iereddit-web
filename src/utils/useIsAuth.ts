import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMeQuery } from "../generated/graphql";

export const useIsAuth = () => {
  const [{ data, fetching }] = useMeQuery();
  const router = useRouter();
  useEffect(() => {
    if (!fetching && !data?.me) {
      // This will send the user to whichever page they need to go after logging in
      router.replace("/login?next=" + router.pathname);
    }
  }, [data, router, fetching]);
};
