import React from 'react';
import classnames from 'classnames';

interface FauxButtonProps {
    url: string;
    target?: string;
    className?: string;
    type?: 'filled' | 'outline' | 'text';
    size?: 'regular' | 'small';
    children?: React.ReactNode;
}

export const FauxButton = (props: FauxButtonProps) => {
    const buttonClasses = classnames(['component-button', 'button-faux'], {
        [`button-${props.type || 'filled'}`]: props.type,
        [`${props.className}`]: props.className,
        'button-small': props.size === 'small',
    });

    return (
        <div className={buttonClasses}>
            <a target={props.target || '_blank'} href={props.url}>
                {props.children}
            </a>
        </div>
    );
};
