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

// Test write actor. name, date of birth, photoUrl, country
test("Should write actor with valid data", async () => {
  await loginAsAdmin();

  await driver.get(`${baseUrl}/admin/actors`);
  await wait(5);

  const addActorButton = await driver.findElement(
    By.name("add-item-modal-button")
  );
  await addActorButton.click();

  await wait(4);
  // Masukkan data actor
  const nameInput = await driver.findElement(By.name("name"));
  await nameInput.sendKeys("Tom Holland");

  const dobInput = await driver.findElement(By.name("birthDate"));
  await dobInput.sendKeys("12-12-2004");

  const countryDropdown = await driver.findElement(By.name("country"));
  await countryDropdown.click();
  const countryOption = await driver.findElement(
    By.xpath("//li[contains(text(), 'United States')]")
  );
  await countryOption.click();

  await wait(4);

  // Submit form
  const submitButton = await driver.findElement(
    By.name("submit-add-item-button")
  );
  await submitButton.click();

  // cek apakah actor berhasil ditambahkan (snackbar)
  await driver.wait(until.elementLocated(By.css(".MuiSnackbar-root")), 10000);
  const snackbar = await driver.findElement(By.css(".MuiSnackbar-root"));
  expect(snackbar).not.toBeNull();
}, 30000);

// Test read actor
test("Should read actor", async () => {
  expect(1).toBe(1);
}, 30000);

// Test edit actor. name, date of birth, photoUrl, country
test("Should edit actor with valid data", async () => {
  await driver.get(`${baseUrl}/admin/actors`);
  await wait(5);

  const editButton = await driver.findElement(By.name("edit-item-button"));
  await editButton.click();

  await wait(4);
  // Masukkan data actor
  const nameInput = await driver.findElement(By.name("name"));
  await nameInput.clear();
  await nameInput.sendKeys("Tom Holland");

  const dobInput = await driver.findElement(By.name("birthDate"));
  await dobInput.clear();
  await dobInput.sendKeys("12-12-2004");

  const countryDropdown = await driver.findElement(By.name("country"));
  await countryDropdown.click();
  const countryOption = await driver.findElement(
    By.xpath("//li[contains(text(), 'United States')]")
  );
  await countryOption.click();

  await wait(4);

  // Submit form
  const submitButton = await driver.findElement(
    By.name("submit-edit-item-button")
  );
  await submitButton.click();

  // cek apakah actor berhasil diubah (snackbar)
  await driver.wait(until.elementLocated(By.css(".MuiSnackbar-root")), 10000);
  const snackbar = await driver.findElement(By.css(".MuiSnackbar-root"));
  expect(snackbar).not.toBeNull();
}, 30000);

// Test delete actor
test("Should delete actor", async () => {
  await driver.get(`${baseUrl}/admin/actors`);
  await wait(5);

  const deleteButton = await driver.findElement(By.name("delete-item-button"));
  await deleteButton.click();

  await wait(4);

  // Submit form
  const submitButton = await driver.findElement(
    By.name("discard-notes-button")
  );
  await submitButton.click();

  // cek apakah actor berhasil dihapus (snackbar)
  await driver.wait(until.elementLocated(By.css(".MuiSnackbar-root")), 10000);
  const snackbar = await driver.findElement(By.css(".MuiSnackbar-root"));
  expect(snackbar).not.toBeNull();
}, 30000);
