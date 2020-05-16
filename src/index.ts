import { ConfigOverride } from '@codedoc/core';

import { Author, Big, Hero, PageHead, Space } from './components';
import { addGitHubConfig, addSource, addStyles, addTwitterMeta, addOGMeta } from './post';


export interface CodingBlogPluginOptions {
  assets?: string[];
}


export function codingBlog(options?: CodingBlogPluginOptions) {
  return function(): ConfigOverride {
    return {
      markdown: {
        customComponents:  {
          Author, Big, Hero, PageHead, Space
        }
      },
      page: {
        post: [
          addGitHubConfig(),
          addSource(),
          addStyles(),
          addTwitterMeta(),
          addOGMeta(),
        ]
      },
      misc: {
        coding_blog: {
          assets: options?.assets || []
        }
      }
    }
  }
}