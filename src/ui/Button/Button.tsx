import styles from "./Button.module.css";

interface ButtonProps {
    title: string,
    type?: "button" | "submit" | "reset",
    style?: React.CSSProperties,
    variant?: string,
    onClick?: () => void;
}

export const Button = ({ title, type = "button", style, variant, onClick }: ButtonProps) => {
    return (
        <button
            className={variant === "card" ? styles.card : styles.transparent_button}
            type={type}
            style={style}
            onClick={onClick}
        >
            {title}
        </button>
    );
};
