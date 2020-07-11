import React from 'react';
import { Attachment } from '../../lib/types';
import { FileDownloadIcon } from '../icons';

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
                <a href={attachment.file} target='_blank'>
                    <FileDownloadIcon height={20} width={20} />
                    &nbsp;
                    {attachment.name}
                </a>
            </p>
            ))
        }
    </React.Fragment>
);
