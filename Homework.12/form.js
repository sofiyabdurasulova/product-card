export class Form {
  constructor(id) {
    this.form = document.getElementById(id);
  }
  getValues() {
    this.formData = new FormData(this.form);
    this.values = {};
    this.formData.forEach((value, key) => {
      this.values[key] = value;
    });
    return this.values;
  }
  isValid() {
    return this.form.checkValidity();
  }
  reset() {
    this.form.reset();
  }
}
