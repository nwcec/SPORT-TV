var options;

	  options = {
      techOrder: [ 'chromecast', 'html5', 'youtube' ],
      liveui: true,     
      html5: {
        hls: {
        overrideNative: true
        },
      nativeAudioTracks: false,
      nativeVideoTracks: false,
      }
      };
	  var player = videojs('pd-video', options);	
	  player.playlist([{
      name: 'القناة الأولى',
      description: 'BeinSport Premium 1',
      
	  poster: 'https://2u.pw/y5iec',
      sources: [
        { src: 'https://streams.spacetoon.com/live/stchannel/smil:livesmil.smil/playlist.m3u8', type: 'application/x-mpegurl', label: 'Live' },
      ],
      thumbnail: [
        {
          srcset: 'https://2u.pw/y5iec',
          type: 'image/jpeg',
          media: '(min-width: 400px;)'
        },
        {
          src: 'https://2u.pw/y5iec'
        }
      ]
    },
    {
      name: 'القناة الثانية',
      description: 'BeinSport Premium 2',
      
	  poster: 'https://2u.pw/TusAD',
      sources: [
        { src: 'https://streams.spacetoon.com/live/stchannel/smil:livesmil.smil/playlist.m3u8', type: 'application/x-mpegurl', label: 'Live' },
      ],
      thumbnail: [
        {
          srcset: 'https://2u.pw/TusAD',
          type: 'image/jpeg',
          media: '(min-width: 400px;)'
        },
        {
          src: 'https://2u.pw/TusAD'
        }
      ]
    },
    {
      name: 'القناة الثالثة',
      description: 'BeinSport Premium 3',
      
	  poster: 'https://2u.pw/3PQwt',
      sources: [
        { src: 'https://streams.spacetoon.com/live/stchannel/smil:livesmil.smil/playlist.m3u8', type: 'application/x-mpegurl', label: 'Live' },
      ],

      thumbnail: [
        {
          srcset: 'https://2u.pw/3PQwt',
          type: 'image/jpeg',
          media: '(min-width: 400px;)'
        },
        {
          src: 'https://2u.pw/3PQwt'
        }
      ]
    }, 
	{
      name: 'القناة الرابعة',
      description: 'BeinSport 1',
      
	  poster: 'https://2u.pw/TqDCv',
      sources: [
        { src: 'https://streams.spacetoon.com/live/stchannel/smil:livesmil.smil/playlist.m3u8', type: 'application/x-mpegurl', label: 'Live' },
      ],
      thumbnail: [
        {
          srcset: 'https://2u.pw/TqDCv',
          type: 'image/jpeg',
          media: '(min-width: 400px;)'
        },
        {
          src: 'https://2u.pw/TqDCv'
        }
      ]
    },
	    {
      name: 'القناة الخامسة',
      description: 'BeinSport 2',
      
	  poster: 'https://2u.pw/4cmZ1',
      sources: [
        { src: 'https://streams.spacetoon.com/live/stchannel/smil:livesmil.smil/playlist.m3u8', type: 'application/x-mpegurl', label: 'Live' },
      ],
      thumbnail: [
        {
          srcset: 'https://2u.pw/4cmZ1',
          type: 'image/jpeg',
          media: '(min-width: 400px;)'
        },
        {
          src: 'https://2u.pw/4cmZ1'
        }
      ]
    },
	    {
      name: 'القناة السادسة',
      description: 'BeinSport 3',
      
	  poster: 'https://2u.pw/3spgu',
      sources: [
        { src: 'https://streams.spacetoon.com/live/stchannel/smil:livesmil.smil/playlist.m3u8', type: 'application/x-mpegurl', label: 'Live' },
      ],
      thumbnail: [
        {
          srcset: 'https://2u.pw/3spgu',
          type: 'image/jpeg',
          media: '(min-width: 400px;)'
        },
        {
          src: 'https://2u.pw/3spgu'
        }
      ]
    },
	    {
      name: 'القتاة السابعة',
      description: 'BeinSport 4',
      
	  poster: 'https://2u.pw/OPIGl',
      sources: [
		{ src: 'https://streams.spacetoon.com/live/stchannel/smil:livesmil.smil/playlist.m3u8', type: 'application/x-mpegurl', label: 'Live' },
      ],
      thumbnail: [
        {
          srcset: 'https://2u.pw/OPIGl',
          type: 'image/jpeg',
          media: '(min-width: 400px;)'
        },
        {
          src: 'https://2u.pw/OPIGl'
        }
      ]
    },
  	    {
      name: 'القناة الثامنة',
      description: 'BeinSport 5',
      
	  poster: 'https://2u.pw/bXjmk',
      sources: [
        { src: 'https://streams.spacetoon.com/live/stchannel/smil:livesmil.smil/playlist.m3u8', type: 'application/x-mpegurl', label: 'Live' },
      ],
      thumbnail: [
        {
          srcset: 'https://2u.pw/bXjmk',
          type: 'image/jpeg',
          media: '(min-width: 400px;)'
        },
        {
          src: 'https://2u.pw/bXjmk'
        }
      ]
    },
	{
      name: 'القناة التاسعة',
      description: 'BeinSport 6',
      
	  poster: 'https://2u.pw/Cd67A',
      sources: [
        { src: 'https://streams.spacetoon.com/live/stchannel/smil:livesmil.smil/playlist.m3u8', type: 'application/x-mpegurl', label: 'Live' },
      ],
      thumbnail: [
        {
          srcset: 'https://2u.pw/Cd67A',
          type: 'image/jpeg',
          media: '(min-width: 400px;)'
        },
        {
          src: 'https://2u.pw/Cd67A'
        }
      ]
    },
	{
      name: 'القناة العاشرة',
      description: 'BeinSport 7',
      
	  poster: 'https://2u.pw/WCfQr',
      sources: [
        { src: 'https://streams.spacetoon.com/live/stchannel/smil:livesmil.smil/playlist.m3u8', type: 'application/x-mpegurl', label: 'Live' },
      ],
      thumbnail: [
        {
          srcset: 'https://2u.pw/WCfQr',
          type: 'image/jpeg',
          media: '(min-width: 400px;)'
        },
        {
          src: 'https://2u.pw/WCfQr'
        }
      ]
    },
	]);
  player.playlistUi();
	player.playlist.autoadvance(0);
	player.playlist.repeat(true);
	player.controlBar.addChild('QualitySelector');
	player.chromecast();
