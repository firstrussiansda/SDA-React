export interface Quote {
    origin: string;
    text: string;
}

interface Base {
    id: string;
    url: string;
}

export interface Event extends Base {
    title: string;
    description: string;
    date: string;
    is_featured: boolean;
    location_name: string;
    image_url: string;
    image_description: string;
}

export interface Person extends Base {
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
    id:	string;
    url: string;
    title: string;
    description: string;
}

export interface JustSermon {
    title: string;
    description: string;
    date: string;
    speakers: Person[];
    soundcloud_assets: SoundCloudAsset[];
    youtube_assets: MediaAsset[];
}

export interface Sermon extends Base, JustSermon {
    series?: JustSermonSeries;
}

export interface SermonSeries extends JustSermonSeries {
    sermons: JustSermon[];
}

export interface ReqParams {
    [k: string]: string | number | boolean;
}
