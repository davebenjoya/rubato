import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "songs", "lessons", "lessonsContent", "songsContent", "allLessonsRightSide", "SongRightSide"]

  connect() {
    console.log(this.element);
    console.log(this.songsTarget);
  }

  selectSongs() {
    console.log("Songs was clicked");
    this.songsTarget.classList.add("selected-item");
    this.lessonsTarget.classList.remove("selected-item");
    this.lessonsContentTarget.style.display = "none";
    this.songsContentTarget.style.display = "";
    this.allLessonsRightSideTarget.style.display = "none";
    this.SongRightSideTarget.style.display = "";
  }

  selectLessons() {
    console.log("Lessons was clicked");
    this.lessonsTarget.classList.add("selected-item");
    this.songsTarget.classList.remove("selected-item");
    this.songsContentTarget.style.display = "none";
    this.lessonsContentTarget.style.display = "";
    this.SongRightSideTarget.style.display = "none";
    this.allLessonsRightSideTarget.style.display = "";
  }
}
