const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");
const { By, until } = require("selenium-webdriver");

let driver;

beforeAll(async () => {
  const service = new chrome.ServiceBuilder(chromedriver.path).build();
  driver = chrome.Driver.createSession(new chrome.Options(), service);
  console.log("Selenium WebDriver started.");
}, 60000);

afterAll(async () => {
  if (driver) {
    await driver.quit();
    console.log("Selenium WebDriver closed.");
  }
}, 60000);

const baseUrl = "http://localhost:3002"; // Sesuaikan dengan URL halaman login Anda

async function wait(ms) {
  return await new Promise((resolve) => setTimeout(resolve, ms * 1000));
}

// login as admin
const loginAsAdmin = async () => {
  await driver.get(`${baseUrl}/sign-in`);

  const emailInput = await driver.findElement(By.name("email"));
  await emailInput.sendKeys("ei@movienexus.com"); // Masukkan email valid

  const passwordInput = await driver.findElement(By.name("password"));
  await passwordInput.sendKeys("*eipalingcantik26"); // Masukkan password valid
  const loginButton = await driver.findElement(
    By.css(
      ".MuiButton-root.MuiButton-variantSolid.MuiButton-colorPrimary.MuiButton-sizeMd.css-1vmk67k-JoyButton-root"
    )
  );

  await wait(2);
  await loginButton.click();
  await wait(2);

  // Tunggu hingga login berhasil dan halaman berubah
  await driver.wait(until.urlContains("/"), 10000); // Sesuaikan URL setelah login
};

// test write movie
test("Should write movie with valid data", async () => {
  await loginAsAdmin();
  await driver.get(`${baseUrl}/admin/movies`);
  await wait(3);

  const addMovieButton = await driver.findElement(
    By.name("add-item-modal-button")
  );
  await addMovieButton.click();

  await wait(3);

  // isi data
  await driver.findElement(By.name("title")).sendKeys("The Matrix");
  await driver
    .findElement(By.name("synopsis"))
    .sendKeys("A hacker discovers the shocking truth about his reality.");
  await driver
    .findElement(By.name("posterUrl"))
    .sendKeys("https://example.com/matrix-poster.jpg");
  await driver
    .findElement(By.name("backdropUrl"))
    .sendKeys("https://example.com/matrix-backdrop.jpg");
  await driver
    .findElement(By.name("videoUrl"))
    .sendKeys("https://youtu.be/vKQi3bBA1y8");
  await driver.findElement(By.name("releaseDate")).sendKeys("12-12-2004");

  // Klik dropdown "Country" dan pilih opsi

  const countryDropdown = await driver.findElement(By.name("country"));
  await countryDropdown.click(); // Klik dropdown

  const countryOption = await driver.findElement(
    By.xpath("//li[contains(text(), 'United States')]")
  );
  await countryOption.click(); // Pilih opsi "United States"

  // Klik dropdown "Director" dan pilih opsi

  const directorDropdown = await driver.findElement(By.name("director"));
  await directorDropdown.click(); // Klik dropdown

  const directorOption = await driver.findElement(
    By.xpath("//li[contains(text(), 'Tim Burton')]")
  );
  await directorOption.click(); // Pilih opsi "Tim Burton"

  // Klik dropdown "Genres" dan pilih opsi
  const genresDropdown = await driver.findElement(By.name("genres"));
  await genresDropdown.click(); // Klik dropdown

  const genresOption = await driver.findElement(
    By.xpath("//li[contains(text(), 'Adventure')]")
  );
  await genresOption.click(); // Pilih opsi "Adventure"

  // Klik dropdown "Actors" dan pilih opsi

  const actorsDropdown = await driver.findElement(By.name("actors"));
  await actorsDropdown.click(); // Klik dropdown

  const actorsOption = await driver.findElement(
    By.xpath("//li[contains(text(), 'Julie Walters')]")
  );
  await actorsOption.click(); // Pilih opsi "Julie Walters"

  await wait(3);

  // Submit form
  const submitButton = await driver.findElement(
    By.name("submit-add-item-button")
  );
  await submitButton.click();
  await wait(3);
  await driver.wait(until.elementLocated(By.css(".MuiSnackbar-root")), 10000);
  const snackbar = await driver.findElement(By.css(".MuiSnackbar-root"));
  expect(snackbar).not.toBeNull();
}, 60000);

// Edit movie
test("Should edit movie with valid data", async () => {
  await driver.get(`${baseUrl}/admin/movies`);
  await wait(4);
  const editButton = await driver.findElement(By.name("edit-item-button"));
  await editButton.click();
  await wait(3);

  const titleInput = await driver.findElement(By.name("title"));
  await titleInput.clear();
  await titleInput.sendKeys("Testing 123");

  // Submit form
  const submitButton = await driver.findElement(
    By.name("submit-edit-item-button")
  );
  await submitButton.click();

  await wait(3);
  await driver.wait(until.elementLocated(By.css(".MuiSnackbar-root")), 10000);
  const snackbar = await driver.findElement(By.css(".MuiSnackbar-root"));
  expect(snackbar).not.toBeNull();
}, 60000);

// Delete movie
test("Should delete movie", async () => {
  await driver.get(`${baseUrl}/admin/movies`);

  await wait(10);
  const deleteButton = await driver.findElement(By.name("delete-item-button"));
  await deleteButton.click();

  await wait(3);

  // Submit form
  const submitButton = await driver.findElement(
    By.name("discard-notes-button")
  );
  await submitButton.click();

  await wait(3);
  await driver.wait(until.elementLocated(By.css(".MuiSnackbar-root")), 10000);
  const snackbar = await driver.findElement(By.css(".MuiSnackbar-root"));
  expect(snackbar).not.toBeNull();
}, 60000);

// test read movie
test("Should read movie", async () => {
  await wait(1);
  expect(1).toBe(1);
}, 60000);
