/*
 * Autor: Daniel Alvarado
 * Fecha de creación: 2024-01-24
 * Descripción: Lista los usuarios creados paginados
 * Historial:
 *	[v1.0] - [2024-01-24] - [Daniel Alvarado] - [Creación del sp]
*/

CREATE PROCEDURE [dbo].[sp_UsersToList]
	@page INT,
	@start INT,
	@limit INT
    -- Agrega tus parametros faltantes como rango de fechas
AS
BEGIN
	SELECT	ROW_NUMBER() OVER(ORDER BY u.[user_id]) AS NUMREGISTROS,
			u.[user_id]
			-- Agrega mas columnas a listar
	FROM	dbo.[User] AS u
    -- agrega tus filtros con WHERE
	ORDER BY u.[user_id] DESC
		OFFSET 
			((@page - 1) * (@limit)) ROWS
		FETCH NEXT
			@limit ROWS ONLY
END