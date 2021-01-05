export interface BaseApiResponse {
    detail?: string;
}
export interface ListResponse<T> extends BaseApiResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}

export interface ListSermonSeriesResponse extends ListResponse<SermonSeries> {}

export interface GetThoughtResponse extends Thought, BaseApiResponse {}
export interface ListThoughtsResponse extends ListResponse<Thought> {}

export interface GetUpdateResponse extends Update, BaseApiResponse {}
export interface ListUpdatesResponse extends ListResponse<Update> {}

export interface ListYearMonthsResponse extends ListResponse<YearMonths> {}

export interface ListSermonsResponse extends ListResponse<Sermon> {}

export interface ListPeopleResponse extends ListResponse<Person> {}

export interface ListEventsResponse extends ListResponse<Event> {}

export interface Quote {
    origin: string;
    text: string;
}

interface Base {
    id: string;
    url: string;
}

export interface Attachment {
  id: string;
  url: string;
  name: string;
  file: string;
}

export interface Image {
    image_url: string;
    image_description: string;
}

export interface Event extends Base, Image {
    title: string;
    description: string;
    date: string;
    is_featured: boolean;
    location_name: string;
    attachments: Attachment[];
}

export interface Update extends Base {
    slug: string;
    title: string;
    description: string;
    announcement_html?: string;
    is_featured: boolean;
    start_date: string;
    end_date: string;
    attachments: Attachment[];
    alert_level: 'DANGER' | 'WARNING' | 'INFO';
}

export interface Person extends Base {
    slug: string;
    name: string;
    profile_image_url: string;
    position: string;
    about: string;
}

export interface MediaAsset extends Base {
    title: string;
    object_id: string;
    object_url: string;
    oembed_object_url: string;
    thumbnail_url: string;
}

export interface SoundCloudAsset extends MediaAsset {
    track_id: string;
}

export interface JustSermonSeries {
    slug: string;
    id:	string;
    url: string;
    title: string;
    description: string;
}

export interface JustSermon {
    slug: string;
    title: string;
    description: string;
    date: string;
    speakers: Person[];
    soundcloud_assets: SoundCloudAsset[];
    youtube_assets: MediaAsset[];
    attachments: Attachment[];
}

export interface Sermon extends Base, JustSermon {
    series?: JustSermonSeries;
}

export interface SermonSeries extends JustSermonSeries {
    sermons: JustSermon[];
}

export interface Thought extends Base, Image {
    title: string;
    slug: string;
    description: string;
    thought_html: string;
    date: string;
    attachments: Attachment[];
    authors: Person[];
}

export interface ReqParams {
    [k: string]: string | number | boolean | (string | number | boolean)[];
}

export interface YearMonths {
    [year: string]: {
        [month: number]: number;
    };
}
