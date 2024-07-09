const STRING = 'search';

class SearchString {
  static getString(): string {
    return localStorage.getItem(STRING) ?? '';
  }

  static setString(str: string) {
    localStorage.setItem(STRING, str.trimEnd());
  }
}

export default SearchString;
