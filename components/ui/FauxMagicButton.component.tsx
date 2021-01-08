import classnames from 'classnames';
import Link from 'next/link';
import React from 'react';

interface FauxMagicButtonProps {
    url: string;
    className?: string;
    type?: 'filled' | 'outline' | 'text';
    size?: 'regular' | 'small' | 'x-small';
    children?: React.ReactNode;
    onClick?: () => void;
}

export const FauxMagicButton = (props: FauxMagicButtonProps) => {
    const buttonClasses = classnames(['component-button', 'button-faux'], {
        [`button-${props.type || 'filled'}`]: props.type,
        [`${props.className}`]: props.className,
        'button-small': props.size === 'small',
        'button-x-small': props.size === 'x-small',
    });

    return (
        <div className={buttonClasses}>
            <Link href={props.url}>
                <a onClick={props.onClick}>{props.children}</a>
            </Link>
        </div>
    );
};
