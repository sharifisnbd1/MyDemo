package PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPageObject {
	WebDriver driver;
	public void loginPageObject(WebDriver driver){
		this.driver=driver;
		PageFactory.initElements(driver,this);
	}
	@FindBy(xpath = "//span[contains(text(),'Login')]")
	public WebElement btnLogin;
	
	@FindBy(xpath = "//input[@id='login_username']")
	public WebElement txtUserName;
	
	@FindBy(xpath = "//input[@id='login_password']")
	public WebElement txtPassword;
	
	@FindBy(xpath = "//button[contains(text(),'Log In')]")
	public WebElement btnSubmit;
	
	@FindBy(xpath = "//*[contains(text(),'password are incorrect.')]")
	public WebElement lblIncorrectIdOrPassword;
	


}
