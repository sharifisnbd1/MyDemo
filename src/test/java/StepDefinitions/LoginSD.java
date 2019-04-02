package StepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import PageObjects.LoginPageObject;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSD {
	WebDriver driver;
	LoginPageObject tfs;
	@Given("^User open browser and enter URL$")
	public void user_open_browser_and_enter_URL() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\shari\\eclipse-workspace\\com.TFS\\Drivers\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("https://www.toyotafinancial.com/us/en.html");
		driver.manage().window().maximize();   
		tfs = PageFactory.initElements(driver, LoginPageObject.class);

	}

	@When("^Enter invalid credentials$")
	public void enter_invalid_credentials() throws InterruptedException {
		tfs.btnLogin.click();
		Thread.sleep(2000);
		tfs.txtUserName.sendKeys("abc");
		Thread.sleep(2000);
		tfs.txtPassword.sendKeys("123");
		Thread.sleep(2000);
		tfs.btnSubmit.click();
		
}

	
	@Then("^Username and/or password are incorrect$")
	public void username_and_or_password_are_incorrect() {

		
}

@Then("^Close the browser$")
public void close_the_browser() throws Throwable {
   driver.close();

}
	
}
