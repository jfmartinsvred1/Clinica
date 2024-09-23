type FooterProps = {
    valueClassMain: string;
};

const Footer = ({ valueClassMain }: FooterProps) => {
    return (
        <div className={`absolute bg-red-500 w-full flex justify-center items-center bottom-0 h-10`}>
            <h1>
                Desenvolvido por <a target="_blank" rel="noopener noreferrer" href="https://jfmartins.vercel.app/">Jfmartins</a>
            </h1>
        </div>
    );
};

export default Footer;
