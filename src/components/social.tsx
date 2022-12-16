import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

export default function Social() {
  return (
    <div className="flex text-white gap-3 p-2 mt-2">
      <span>
        <GithubLogo size={32}/>
      </span>
      <span>
        <LinkedinLogo size={32}/>
      </span>
      <span>  
        <InstagramLogo size={32}/>
      </span>
    </div>
  )
    
}