

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Beers System</h1>
        <form action="BeerServlet" method="POST">
        <label>
        Choose Color  :<select name="color">
                <option value="red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Yellow">Yellow</option>
                <option value="Balck">Black</option>
                <option value="White">White</option>
            </select>

        </label>
        <input type="submit" value="Submit"/>
        </form>
    </body>
</html>
