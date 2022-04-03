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
      description: 'بي ان سبورت بريميوم 1',
      
	  poster: 'https://up4net.com/uploads4/up4net.com163844021973251.png',
      sources: [
        { src: 'http://stream.shabakaty.com:6001/sport/ch1/adaptive.m3u8', type: 'application/x-mpegurl', label: 'Live' },
      ],
      thumbnail: [
        {
          srcset: 'https://up4net.com/uploads4/up4net.com163844021973251.png',
          type: 'image/jpeg',
          media: '(min-width: 400px;)'
        },
        {
          src: 'https://up4net.com/uploads4/up4net.com163844021973251.png'
        }
      ]
    },
    {
      name: 'القناة الثانية',
      description: 'بي ان سبورت بريميوم 2',
      
	  poster: 'https://up4net.com/uploads4/up4net.com163844092249331.png',
      sources: [
        { src: 'http://stream.shabakaty.com:6001/sport/ch2/adaptive.m3u8', type: 'application/x-mpegurl', label: 'Live' },
      ],
      thumbnail: [
        {
          srcset: 'https://up4net.com/uploads4/up4net.com163844092249331.png',
          type: 'image/jpeg',
          media: '(min-width: 400px;)'
        },
        {
          src: 'https://up4net.com/uploads4/up4net.com163844092249331.png'
        }
      ]
    },
    {
      name: 'القناة الثالثة',
      description: 'بي ان سبورت بريميوم 3',
      
	  poster: 'https://up4net.com/uploads4/up4net.com163844101196171.png',
      sources: [
        { src: 'http://stream.shabakaty.com:6001/sport/ch3/adaptive.m3u8', type: 'application/x-mpegurl', label: 'Live' },
      ],

      thumbnail: [
        {
          srcset: 'https://up4net.com/uploads4/up4net.com163844101196171.png',
          type: 'image/jpeg',
          media: '(min-width: 400px;)'
        },
        {
          src: 'https://up4net.com/uploads4/up4net.com163844101196171.png'
        }
      ]
    }, 
	{
      name: 'القناة الرابعة',
      description: 'بي ان سبورت 1',
      
	  poster: 'https://up4net.com/uploads4/up4net.com163844105845411.png',
      sources: [
        { src: 'http://stream.shabakaty.com:6001/sport/ch5/adaptive.m3u8', type: 'application/x-mpegurl', label: 'Live' },
      ],
      thumbnail: [
        {
          srcset: 'https://up4net.com/uploads4/up4net.com163844105845411.png',
          type: 'image/jpeg',
          media: '(min-width: 400px;)'
        },
        {
          src: 'https://up4net.com/uploads4/up4net.com163844105845411.png'
        }
      ]
    },
	    {
      name: 'القناة الخامسة',
      description: 'بي ان سبورت 2',
      
	  poster: 'https://up4net.com/uploads4/up4net.com163844110322131.png',
      sources: [
        { src: 'http://stream.shabakaty.com:6001/sport/ch6/adaptive.m3u8', type: 'application/x-mpegurl', label: 'Live' },
      ],
      thumbnail: [
        {
          srcset: 'https://up4net.com/uploads4/up4net.com163844110322131.png',
          type: 'image/jpeg',
          media: '(min-width: 400px;)'
        },
        {
          src: 'https://up4net.com/uploads4/up4net.com163844110322131.png'
        }
      ]
    },
	    {
      name: 'القناة السادسة',
      description: 'بي ان سبورت 3',
      
	  poster: 'https://up4net.com/uploads4/up4net.com163844114995731.png',
      sources: [
        { src: 'http://stream.shabakaty.com:6001/sport/ch7/adaptive.m3u8', type: 'application/x-mpegurl', label: 'Live' },
      ],
      thumbnail: [
        {
          srcset: 'https://up4net.com/uploads4/up4net.com163844114995731.png',
          type: 'image/jpeg',
          media: '(min-width: 400px;)'
        },
        {
          src: 'https://up4net.com/uploads4/up4net.com163844114995731.png'
        }
      ]
    },
	    {
      name: 'القتاة السابعة',
      description: 'بي ان سبورت 4',
      
	  poster: 'https://up4net.com/uploads4/up4net.com163844119833741.png',
      sources: [
		{ src: 'http://stream.shabakaty.com:6001/sport/ch8/adaptive.m3u8', type: 'application/x-mpegurl', label: 'Live' },
      ],
      thumbnail: [
        {
          srcset: 'https://up4net.com/uploads4/up4net.com163844119833741.png',
          type: 'image/jpeg',
          media: '(min-width: 400px;)'
        },
        {
          src: 'https://up4net.com/uploads4/up4net.com163844119833741.png'
        }
      ]
    },
  	    {
      name: 'القناة الثامنة',
      description: 'بي ان سبورت 5',
      
	  poster: 'https://up4net.com/uploads4/up4net.com163844124614991.png',
      sources: [
        { src: 'http://stream.shabakaty.com:6001/sport/ch9/adaptive.m3u8', type: 'application/x-mpegurl', label: 'Live' },
      ],
      thumbnail: [
        {
          srcset: 'https://up4net.com/uploads4/up4net.com163844124614991.png',
          type: 'image/jpeg',
          media: '(min-width: 400px;)'
        },
        {
          src: 'https://up4net.com/uploads4/up4net.com163844124614991.png'
        }
      ]
    },
	{
      name: 'القناة التاسعة',
      description: 'بي ان سبورت 6',
      
	  poster: 'https://up4net.com/uploads4/up4net.com163844128283641.png',
      sources: [
        { src: 'http://stream.shabakaty.com:6001/sport/ch10/adaptive.m3u8', type: 'application/x-mpegurl', label: 'Live' },
      ],
      thumbnail: [
        {
          srcset: 'https://up4net.com/uploads4/up4net.com163844128283641.png',
          type: 'image/jpeg',
          media: '(min-width: 400px;)'
        },
        {
          src: 'https://up4net.com/uploads4/up4net.com163844128283641.png'
        }
      ]
    },
	{
      name: 'القناة العاشرة',
      description: 'بي ان سبورت 7',
      
	  poster: 'https://up4net.com/uploads4/up4net.com163844133322491.png',
      sources: [
        { src: 'http://stream.shabakaty.com:6001/sport/ch11/adaptive.m3u8', type: 'application/x-mpegurl', label: 'Live' },
      ],
      thumbnail: [
        {
          srcset: 'https://up4net.com/uploads4/up4net.com163844133322491.png',
          type: 'image/jpeg',
          media: '(min-width: 400px;)'
        },
        {
          src: 'https://up4net.com/uploads4/up4net.com163844133322491.png'
        }
      ]
    },
	]);
  player.playlistUi();
        player.playlist.autoadvance(0);
	player.playlist.repeat(true);
	player.controlBar.addChild('QualitySelector');
	player.chromecast();
