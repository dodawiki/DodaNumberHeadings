# DodaNumberHeadings

미디어위키 1.38 버전 이후로 사용률이 저조하고 성능 문제를 이유로 [파서 numberheadings 옵션이 제거돼 버렸습니다...](https://phabricator.wikimedia.org/T284921)

하지만 나무위키에 익숙한 한국인은 간단하게 numberheading와 유사한 기능을 제공하기 위해 만들었습니다.

## 설치

`LocalSettings.php`에 다음을 추가합니다:

```php
wfLoadExtension( 'DodaNumberHeadings' );
```

## 유의사항

- 목차(toc)에서 숫자를 가져오는 방식으로 구현되었기 때문에, 목차가 없으면 동작하지 않습니다. [ForceTocOnEveryPage 확장](https://github.com/jmnote/ForceTocOnEveryPage) 등으로 해결하시기 바랍니다.
