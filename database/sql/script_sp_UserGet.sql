
/*
 * Autor: Daniel Alvarado
 * Fecha de creación: 2024-01-24
 * Descripción: Consulta la información de un usuario
 * Historial:
 *	[v1.0] - [2024-01-24] - [Daniel Alvarado] - [Creación del sp]
*/

CREATE PROCEDURE [dbo].[sp_UserGet]
	@user_id	INT
AS
BEGIN
	SELECT	u.*
	FROM	dbo.[User] AS u
	WHERE	u.user_id = @user_id
END