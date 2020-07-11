import { useTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

import { Attachments } from '../shared/Attachments.component';
import { formatDate } from '../../lib/helpers';
import { BookmarkFillIcon } from '../icons';
import { Update } from '../../lib/types';

import './UpdateCard.style.scss';

interface UpdatesProps {
    update: Update;
}

export const UpdateCard: React.FunctionComponent<UpdatesProps> = ({ update }) => {
    const { i18n } = useTranslation();

    return (
        <div className='component-update-card'>
            <Card>
                {update.is_featured
                    ? <BookmarkFillIcon height={40} width={40} />
                    : <div className='bookmark-placeholder' />
                }
                <Card.Body>
                    <Card.Title>
                        {update.title}
                    </Card.Title>
                    <div dangerouslySetInnerHTML={{ __html: update.description }} />
                    <Attachments attachments={update.attachments} />
                    {update.announcement_html && (
                        <div className='read-more-link'>
                            <Link
                                href={`/updates/[slug]?slug=${update.slug}`}
                                as={`/updates/${update.slug}`}
                            >
                                <a>Read more</a>
                            </Link>
                        </div>
                    )}
                </Card.Body>
                <Card.Footer className='text-muted'>
                    {formatDate(update.start_date, ['month', 'day', ',', 'year'], i18n.language)}
                </Card.Footer>
            </Card>
        </div>
    );
};
