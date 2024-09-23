import { Github, Linkedin } from "react-bootstrap-icons";

type FooterProps = {
};

const Footer = ({  }: FooterProps) => {
    return (
        <div className={`absolute bg-slate-500 w-full flex flex-col justify-center items-center bottom-0 h-16`}>
            <div className="flex gap-5">
                <Github className="hover:scale-125 hover:cursor-pointer" href="https://github.com/jfmartinsvred1" target="_blank"/>
                <Linkedin className="hover:scale-125 hover:cursor-pointer" href="https://www.linkedin.com/in/jfmartinss21/" target="_blank"/>
            </div>
            <h1 className="text-white">
                <a target="_blank" rel="noopener noreferrer" href="https://jfmartins.vercel.app/">Ir para o meu site</a>
            </h1>
        </div>
    );
};

export default Footer;
