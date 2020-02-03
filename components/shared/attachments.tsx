import React from 'react';
import { Attachment } from '../../lib/types';

interface AttachmentsProps {
    attachments: Attachment[] | null;
    class?: string;
}

export const Attachments: React.FunctionComponent<AttachmentsProps> = props => (
    <React.Fragment>
        {
            props.attachments &&
            props.attachments.map(attachment => (
            <p key={attachment.id} className={props.class || ''}>
                <a href={attachment.url} >
                    <i className='fas fa-file-download' />
                    &nbsp;
                    {attachment.name}
                </a>
            </p>
            ))
        }
    </React.Fragment>
);
