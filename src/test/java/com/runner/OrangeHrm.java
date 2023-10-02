package com.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "C:\\Users\\hveer\\eclipse-workspace\\Cucumber_Project\\src\\test\\java\\com\\feature\\OrangeHRM.feature",
glue ="com.stepdefinition", monochrome=true, dryRun= false, strict=true ,tags=("@Login"),plugin={"html:Report/cucumber_Report","pretty",	
		"json:Report/Cucumber.json",	
		"com.cucumber.listener.ExtentCucumberFormatter:Folder/File.html"})
public class OrangeHrm {

}
