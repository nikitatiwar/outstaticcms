import { useEffect } from "react";
import useRouter from "next/navigate";

export default function ScrollToTop(){
  const {pathname} = useLocation();

  useEffect(()=>{
    window.scrollTo(0,0);
  }, [pathname])
}