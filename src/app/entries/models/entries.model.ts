// interfaces auto generated, so i didnt pay attention to refactor this, too big data ;)

export interface MediaEmbed {
}

export interface SecureMediaEmbed {
}

export interface Gildings {
  gid_1: number;
  gid_2: number;
  gid_3: number;
}

export interface Source {
  url: string;
  width: number;
  height: number;
}

export interface Resolution {
  url: string;
  width: number;
  height: number;
}

export interface Variants {
}

export interface Image {
  source: Source;
  resolutions: Resolution[];
  variants: Variants;
  id: string;
}

export interface Preview {
  images: Image[];
  enabled: boolean;
}

export interface MediaEmbed2 {
  content: string;
  width?: number;
  scrolling?: boolean;
  height?: number;
}

export interface Oembed {
  provider_url: string;
  version: string;
  title: string;
  author_name: string;
  height: number;
  width: number;
  html: string;
  thumbnail_width: number;
  thumbnail_height: number;
  thumbnail_url: string;
  type: string;
  provider_name: string;
  author_url: string;
}

export interface SecureMedia {
  oembed: Oembed;
  type: string;
}

export interface SecureMediaEmbed2 {
  content: string;
  width?: number;
  scrolling?: boolean;
  media_domain_url: string;
  height?: number;
}

export interface Gildings2 {
  gid_1: number;
  gid_2: number;
  gid_3: number;
}

export interface Source2 {
  url: string;
  width: number;
  height: number;
}

export interface Resolution2 {
  url: string;
  width: number;
  height: number;
}

export interface Variants2 {
}

export interface Image2 {
  source: Source2;
  resolutions: Resolution2[];
  variants: Variants2;
  id: string;
}

export interface Preview2 {
  images: Image2[];
  enabled: boolean;
}

export interface Oembed2 {
  provider_url: string;
  version: string;
  title: string;
  author_name: string;
  height: number;
  width: number;
  html: string;
  thumbnail_width: number;
  thumbnail_height: number;
  thumbnail_url: string;
  type: string;
  provider_name: string;
  author_url: string;
}

export interface Media {
  oembed: Oembed2;
  type: string;
}

export interface CrosspostParentList {
  approved_at_utc?: any;
  subreddit: string;
  selftext: string;
  author_fullname: string;
  saved: boolean;
  mod_reason_title?: any;
  gilded: number;
  clicked: boolean;
  title: string;
  link_flair_richtext: any[];
  subreddit_name_prefixed: string;
  hidden: boolean;
  pwls: number;
  link_flair_css_class: string;
  downs: number;
  thumbnail_height: number;
  hide_score: boolean;
  name: string;
  quarantine: boolean;
  link_flair_text_color: string;
  author_flair_background_color: string;
  subreddit_type: string;
  ups: number;
  domain: string;
  media_embed: MediaEmbed2;
  thumbnail_width: number;
  author_flair_template_id?: any;
  is_original_content: boolean;
  user_reports: any[];
  secure_media: SecureMedia;
  is_reddit_media_domain: boolean;
  is_meta: boolean;
  category?: any;
  secure_media_embed: SecureMediaEmbed2;
  link_flair_text: string;
  can_mod_post: boolean;
  score: number;
  approved_by?: any;
  thumbnail: string;
  edited: boolean;
  author_flair_css_class: string;
  author_flair_richtext: any[];
  gildings: Gildings2;
  post_hint: string;
  content_categories?: any;
  is_self: boolean;
  mod_note?: any;
  created: number;
  link_flair_type: string;
  wls: number;
  banned_by?: any;
  author_flair_type: string;
  contest_mode: boolean;
  selftext_html?: any;
  likes?: any;
  suggested_sort?: any;
  banned_at_utc?: any;
  view_count?: any;
  archived: boolean;
  no_follow: boolean;
  is_crosspostable: boolean;
  pinned: boolean;
  over_18: boolean;
  preview: Preview2;
  media_only: boolean;
  link_flair_template_id: string;
  can_gild: boolean;
  spoiler: boolean;
  locked: boolean;
  author_flair_text?: any;
  visited: boolean;
  num_reports?: any;
  distinguished?: any;
  subreddit_id: string;
  mod_reason_by?: any;
  removal_reason?: any;
  link_flair_background_color: string;
  id: string;
  is_robot_indexable: boolean;
  report_reasons?: any;
  author: string;
  num_crossposts: number;
  num_comments: number;
  send_replies: boolean;
  whitelist_status: string;
  mod_reports: any[];
  author_patreon_flair: boolean;
  author_flair_text_color: string;
  permalink: string;
  parent_whitelist_status: string;
  stickied: boolean;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  media: Media;
  is_video: boolean;
}

export interface Data2 {
  approved_at_utc?: any;
  subreddit: string;
  selftext: string;
  author_fullname: string;
  saved: boolean;
  mod_reason_title?: any;
  gilded: number;
  clicked: boolean;
  title: string;
  link_flair_richtext: any[];
  subreddit_name_prefixed: string;
  hidden: boolean;
  pwls?: any;
  link_flair_css_class: string;
  downs: number;
  thumbnail_height?: number;
  hide_score: boolean;
  name: string;
  quarantine: boolean;
  link_flair_text_color: string;
  author_flair_background_color?: any;
  subreddit_type: string;
  ups: number;
  domain: string;
  media_embed: MediaEmbed;
  thumbnail_width?: number;
  author_flair_template_id?: any;
  is_original_content: boolean;
  user_reports: any[];
  secure_media?: any;
  is_reddit_media_domain: boolean;
  is_meta: boolean;
  category?: any;
  secure_media_embed: SecureMediaEmbed;
  link_flair_text: string;
  can_mod_post: boolean;
  score: number;
  approved_by?: any;
  thumbnail: string;
  edited: any;
  author_flair_css_class?: any;
  author_flair_richtext: any[];
  gildings: Gildings;
  content_categories?: any;
  is_self: boolean;
  mod_note?: any;
  created: number;
  link_flair_type: string;
  wls?: any;
  banned_by?: any;
  author_flair_type: string;
  contest_mode: boolean;
  selftext_html: string;
  likes?: any;
  suggested_sort?: any;
  banned_at_utc?: any;
  view_count?: any;
  archived: boolean;
  no_follow: boolean;
  is_crosspostable: boolean;
  pinned: boolean;
  over_18: boolean;
  media_only: boolean;
  link_flair_template_id: string;
  can_gild: boolean;
  spoiler: boolean;
  locked: boolean;
  author_flair_text?: any;
  visited: boolean;
  num_reports?: any;
  distinguished: string;
  subreddit_id: string;
  mod_reason_by?: any;
  removal_reason?: any;
  link_flair_background_color: string;
  id: string;
  is_robot_indexable: boolean;
  report_reasons?: any;
  author: string;
  num_crossposts: number;
  num_comments: number;
  send_replies: boolean;
  whitelist_status?: any;
  mod_reports: any[];
  author_patreon_flair: boolean;
  author_flair_text_color?: any;
  permalink: string;
  parent_whitelist_status?: any;
  stickied: boolean;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  media?: any;
  is_video: boolean;
  author_cakeday?: boolean;
  post_hint: string;
  preview: Preview;
  crosspost_parent_list: CrosspostParentList[];
  crosspost_parent: string;
}

export interface Child {
  kind: string;
  data: Data2;
}

export interface Data {
  modhash: string;
  dist: number;
  children: Child[];
  after: string;
  before?: any;
}

export interface Entries {
  kind: string;
  data: Data;
}
