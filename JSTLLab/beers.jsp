

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>List of Beers</h1>

        <table>
            <tr>Beer Color of ${color}</tr>
            <c:forEach var="beer" items="${beers}">
                <tr>
                    <td>${beer}</td>
                </tr>
            </c:forEach>
        </table>
    </body>
</html>
