import textStyle from './utils/styles/Text.module.css';

const Footer: React.FC = () => {
    return (
        <footer className="text-center text-lg py-4 t bottom-0 left-0 w-full">
            Made with <span role="img" aria-label="heart">❤️</span> by {" "}
            <a className={`${textStyle.textGradient}`} href="https://github.com/rydwan10" target="_blank" rel="noopener noreferrer">
                Muhammad Rydwan
            </a>{" "}
            with{" "}
            <a className={`${textStyle.textGradient}`} href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
                Next.js
            </a>
        </footer>
    );
}

export default Footer;
