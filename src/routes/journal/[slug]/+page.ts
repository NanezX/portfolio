import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { formatDate } from "$lib/utils/date";

export const load: PageLoad = async ({ params }) => {
  try {
    const post = await import(`../../../posts/${params.slug}.svx`);

    return {
      content: post.default,
      meta: post.metadata,
      formattedDate: formatDate(post.metadata.date || ""),
    };
  } catch (e) {
    error(404, `Could not find ${params.slug}`);
  }
};
