import React, { SyntheticEvent } from 'react';
import classnames from 'classnames';
import './Button.style.scss';

interface ButtonProps {
    type?: 'filled' | 'outline' | 'text';
    size?: 'regular' | 'small' | 'x-small';
    block?: boolean;
    round?: boolean;
    disabled?: boolean;
    click?: (e: SyntheticEvent) => void;
    className?: string;
    label?: string;
}

export class Button extends React.Component<ButtonProps> {
    public render() {
        const buttonClasses = classnames('component-button', {
            [`button-${this.props.type || 'filled'}`]: this.props.type,
            'button-block': this.props.block,
            'button-small': this.props.size === 'small',
            'button-x-small': this.props.size === 'x-small',
            'button-round': this.props.round,
            disabled: this.props.disabled === true,
            [`${this.props.className}`]: this.props.className,
        });

        const ariaProps: { 'aria-label'?: string } = {};

        if (this.props.label) {
            ariaProps['aria-label'] = this.props.label;
        }

        return (
            <button
                type="button"
                className={buttonClasses}
                onClick={(e: SyntheticEvent) =>
                    !this.props.disabled &&
                    this.props.click &&
                    this.props.click(e)
                }
                {...ariaProps}
            >
                {this.props.children}
            </button>
        );
    }
}
