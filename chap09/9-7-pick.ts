{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Pick<Video, 'id' | 'title'>; // 선택하고자 하는 것

  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://..',
      data: 'byte-data..'
    };
  }
  function getVideoMetdata(id: string): VideoMetadata {
    return {};
  }
}
