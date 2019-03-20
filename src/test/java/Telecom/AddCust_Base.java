package Telecom;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AddCust_Base extends BaseClass
{
	@FindBy(id="fname")
	public WebElement First_Name;
	@FindBy(id="lname")
	public WebElement Last_Name;
	@FindBy(id="email")
	public WebElement Email;
	@FindBy(name="addr")
	public WebElement Address;
	@FindBy(id="telephoneno")
	public WebElement Phone_Num;
	@FindBy(name="submit")
	public WebElement Submit;
	@FindBy(xpath="//input[@value='Reset']")
	public WebElement Reset;
	

public AddCust_Base() {
PageFactory.initElements(driver, this);
}

public WebElement getFName() 
{
return First_Name;
}
public WebElement getLName()
{
return Last_Name;
}
public WebElement getEmail()
{
return Email;
}
public WebElement getAddress()
{
return Address;
}
public WebElement getPhone()
{
return Phone_Num;
}
public WebElement btnSubmit()
{
return Submit;
}
public WebElement btnReset()
{
return Reset;
}
}
