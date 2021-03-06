# pð­q

> å­¦ä¼åéå¶çä¸ç¬é´ï¼ææ¨çæ³ªæ°´æµäºä¸æ¥ã
>
> å½æçå°é³é¢æ­æ¾å¨ä¸­è·³å¨çé¢è°±å¨ç»ï¼æææç¨çå¤æï¼æ·±éçé¶æ²³ï¼åªæå¤©ä½¿å¨æµåä½å±ï¼å¤æçææäºæç¼ä¸­æº¢åºï¼åæ¯æ²å¥äºé¾éæ¦è§çæµ·ä¸æ ·çæ¸©æã
>
> è¿ä¸å»ææç¥éï¼è³æºé³åä¹å°±å¾ä¸ä¹ï¼çå¬é³ä¹è¿å¾é ç¼çã

netaè³æºæ¢ã

å¯ä»¥è¯´æ¯è¿å±hackergameæç®åçä¸éé¢äºï¼

é¢ç®çéä»¶ç»äºä»MP3çæGIFå¾ççæºç ï¼

```python
from array2gif import write_gif  # version: 1.0.4
import librosa  # version: 0.8.1
import numpy  # version: 1.19.5


num_freqs = 32
quantize = 2
min_db = -60
max_db = 30
fft_window_size = 2048
frame_step_size = 512
window_function_type = 'hann'
red_pixel = [255, 0, 0]
white_pixel = [255, 255, 255]
y, sample_rate = librosa.load("flag.mp3")  # sample rate is 22050 Hz

spectrogram = (numpy.around(librosa.power_to_db(librosa.feature.melspectrogram(y, sample_rate, n_mels=num_freqs,
               n_fft=fft_window_size, hop_length=frame_step_size, window=window_function_type)) / quantize) * quantize)

gif_data = [numpy.kron(numpy.array([[red_pixel if freq % 2 and round(frame[freq // 2]) > threshold else white_pixel for threshold in list(range(
    min_db, max_db + 1, quantize))[::-1]] for freq in range(num_freqs * 2 + 1)]), numpy.ones([quantize, quantize, 1])) for frame in spectrogram.transpose()]

write_gif(gif_data, 'flag.gif', fps=sample_rate/frame_step_size)
```

## åæ

å ä¸ºç¨äºå¤§éé­æ³è¯­å¥ï¼æºç éå¸¸ç®ç­ãä½åªè¦è®¤çåæä¸ä¸ï¼è¿æ¯å¾å¥½çè§£çãï¼èä¸å±ä»¬å­¦åå­¦çé½æºæèå¿çï¼

æ¢ç¶æ¯è¦éåï¼å°±å¾ä»åå¾ååæã

`write_gif(gif_data,'flag.gif', fps=sample_rate/frame_step_size)` ï¼æµæ¾ææï¼å°ä¸ä¸ªæ°ç»åå¥æä»¶ä¸­ã

åæ°ç¬¬äºè¡ï¼æ¯å°é³é¢æ°æ®è½¬æ¢ä¸ºå¾åã `gif_data` çæ ¼å¼ä¼¼ä¹é¾ä»¥çè§£ï¼ä½æ¯ç»å `write_gif()` çåæ°è¦æ±ï¼å¯ä»¥æ¨æµåº `gif_data` åºè¯¥æ¯ä¸ªåç»´æ°ç»ãç¬¬ä¸ç»´æ¯å¸§ï¼ç¬¬äºä¸ç»´æ¯é¿åå®½ï¼ç¬¬åç»´æ¯ä¸ä¸ªrgbæ°ç»ã

è¿éæ¾ä¸å¼ æä¸å¸§çå¾åï¼æ¹ä¾¿åæã

![1](img/1.png)

åçè¿ä¸ªæ°ç»çæå¤å±ï¼ `[ ... for frame in spectrogram.transpose()]` ï¼è¿æ¯å¯¹æ¯ä¸å¸§åç¸åçè½¬æ¢æä½ã

åå¾åï¼`numpy.kron( numpy.array( ... ) , numpy.ones([quantize, quantize, 1]))` ï¼æ¯ä¸ä¸ªåç½ååç§¯ã

ç©éµAåBçåç½ååç§¯ä¸ºï¼

![A \otimes B =  \begin{bmatrix} a_{11}B & \cdots & a_{1n}B \\ \vdots& \ddots & \vdots \\ a_{m1}B & \cdots & a_{mn}B \end{bmatrix}](img/2.png)

ä¹å°±æ¯è¯´ï¼`numpy.ones([2, 2, 1])` ä»£è¡¨å°æ¯è¡/åå¨å®çæè¾¹å¤å¶ä¸æ¬¡ãå¨è¿éå¯ä»¥çè§£ä¸ºï¼ä½¿æ¯ä¸å¸§çé¿å®½åä¸ºåæ¥çä¸¤åï¼æåé£ä¸ª 1 æ¯ä½ç¨äºrgbæ°ç»çï¼è¡¨ç¤ºä¸å½±åï¼ã

åå¾åï¼`[ ... for freq in range(num_freqs * 2 + 1)]` ãåæå¾åå¯ä»¥ç¥éï¼æ¨ªåæ ä»£è¡¨çé¢çï¼çºµåæ ä»£è¡¨åè´ãä¸å±32ä¸ªé¢çï¼`num_freqs * 2 + 1` æ¯ä¸ºäºå¨é¦å°¾åä¸­é´æå¥ç¨æ¥åéçç©ºç½é¨åã

åå¾åï¼ `[ ... for threshold in list(range(min_db, max_db +1, quantize))[::-1]]` ãå¯¹åºæ¯ä¸è¡ãæ³¨æè¿éæ­¥é¿ä¸º2ï¼åä¸æçåç½ååç§¯ä¼æµæ¶ï¼åæ¶ä¹æå¤±äºå¥æ°åè´çä¸äºç»èã

æåä¸é¨åï¼ `red_pixel if freq % 2 and round(frame[freq //2]) > threshold else white_pixel` ãå¥æ°åç´æ¥å¡«åç½è²ï¼å¶æ°ååè´æ°å¤§äº `threshold` æ¶å¡«åçº¢è²ã 

è¿æ ·ç¬¬äºè¡å°±åæå®äºï¼ååæç¬¬ä¸è¡ã

`numpy.around( ... / quantize) * quantize` ï¼ææ°æ®åæ´ãè¿éé¡ºå¸¦æåè´æ°å¶æ°åäºã

åå±çä¸¤ä¸ªæ¹æ³ï¼`librosa.power_to_db()` ä¸ `librosa.feature.melspectrogram()` ï¼æ¥è¯¢ææ¡£å¯ä»¥æ¾å°å®ä»¬çéæ¹æ³ï¼`librosa.db_to_power()` ä¸ `librosa.feature.inverse.mel_to_audio()` ã 

è¿æ ·åå¤å·¥ä½å°±åå¥½äºã

## éå

è¿éç´æ¥ä½¿ç¨ `GIF Preview for mac` éå¸§å¯¼åºå¾çï¼åéä¸äººäººé½ä¼ç¨ç `cv2` åºï¼éå¸¸æ¹ä¾¿çå°GIFè½¬æ¢ä¸ºæ°ç»ã 

```python
import cv2

frames = []
for i in range(587):
    im = cv2.imread(f'flag/flag-{i}.png', 0)
    frames.append(im)
```

è¿éä½¿ç¨äºç°åº¦æ¨¡å¼ï¼ærgbè¿ä¸æ°ç»ç®åæäºä¸ä¸ªæ°ãæ­¤æ¶çº¢è²(255,0,0)è¢«è½¬åäº147ã

ä¹åå°±æ¯ä»å¾çä¸­æååè´æ°äºãå3å¸§æ¯ç©ºç½ï¼å¯ä»¥è·³è¿ã

```python
from typing import Counter

frames147 = []
for frame in frames[3:]:
    _ = []
    for i in range(num_freqs):
        column = frame[:,2 + i * 4] 
        c = Counter(column)
        c147 = c[147]*2 if 147 in c else 0
        _.append(c147 + min_db)
    frames147.append(_)
```

ç±äºå«æç©ºç½åååç½ååç§¯å¤å¶åºæ¥çåï¼æ¯ååè¯»ä¸æ¬¡æ°æ®ãç»è®¡çº¢è²åç´ ç¹çä¸ªæ°ç¨äºä¸ä¸ªé­æ³æ¹æ³ `typing.Counter()` ã

å«å¿äºè½¬ç½®ï¼

```python
import numpy as np

spectrogram = np.asarray(frames147).T
```

ç¶åæä¹åçåæ°è°ç¨ `librosa` çä¸¤ä¸ªéæ¹æ³ï¼

```python
import librosa

mp3 = librosa.feature.inverse.mel_to_audio(librosa.db_to_power(spectrogram), sr=sample_rate, n_fft=fft_window_size, hop_length=frame_step_size, window=window_function_type)
```

æåç¨ `soundfile` åºå¯¼åºã 

```python
import soundfile as sf

sf.write('flag.wav', mp3, sample_rate, subtype='PCM_24')
```

æå¼æä»¶ï¼æ¥ä¸æ¥æ¯è±è¯­å¬åç¯èï¼

> The flag is: F-L-A-G six hundred thirty-four billion nine hundred seventy-one million two hundred forty-three thousand five hundred eighty-two.

å¾å°flag `flag{634971243582}` ã 

