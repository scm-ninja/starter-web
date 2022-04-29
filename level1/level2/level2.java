import java.io.FileNotFoundException;
import java.io.PrintWriter;

public class GenerateDummyCode {
	public static void main(String[] args) {
		String className = "Eben";
		String newLine = "\n";
		String tab = "\t";
		String classStart = "public class " + className + " {";
		String closeBracket = "}";
		String mainStart = "public static void main(String[] args) {";
		String dummyContent = "";
		String temp = null;
		int size = 10000;
		for (int i = 1; i <= size; i++) {
			temp = String.format("System.out.println(\" %6d .ci satir\");", i);
			dummyContent += tab + tab + temp + newLine;
		}
		
		String outputCode = 
				classStart + newLine + newLine + 
				tab + mainStart + newLine + newLine +  
				dummyContent + newLine + 
				tab + closeBracket + newLine + 
				closeBracket + newLine;
		
//		System.out.println(result); // To print the output to the console

		PrintWriter out = null;
		
		try {
			out = new PrintWriter(className + ".java");
		} catch (FileNotFoundException e) {
			System.out.println("File not found!");
		}
		
		out.println(outputCode);
		out.close();
	}
}