import { Flex, IconButton } from "@chakra-ui/core";
import React from "react";
import { PostSnippetFragment, useVoteMutation } from "../generated/graphql";

interface UpdootSectionProps {
  post: PostSnippetFragment;
}

export const UpdootSection: React.FC<UpdootSectionProps> = ({ post }) => {
  const [, vote] = useVoteMutation();
  return (
    <Flex direction="column" justifyContent="center" alignItems="center" mr={4}>
      <IconButton
        onClick={() => {
          if (post.voteStatus === 1) {
            return;
          }
          vote({
            postId: post.id,
            value: 1,
          });
        }}
        variantColor={post.voteStatus === 1 ? "green" : undefined}
        icon="chevron-up"
        aria-label="updoot post"
      />
      {post.points}
      <IconButton
        onClick={() => {
          if (post.voteStatus === -1) {
            return;
          }
          vote({
            postId: post.id,
            value: -1,
          });
        }}
        variantColor={post.voteStatus === -1 ? "red" : undefined}
        icon="chevron-down"
        aria-label="downdoot post"
      />
    </Flex>
  );
};
