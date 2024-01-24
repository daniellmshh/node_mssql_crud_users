/*
 * Autor: Daniel Alvarado
 * Fecha de creación: 2024-01-24
 * Descripción: Actualiza el estatus de un usuario.
 * Historial:
 *	[v1.0] - [2024-01-24] - [Daniel Alvarado] - [Creación del sp]
*/

CREATE PROCEDURE [dbo].[sp_UserChangeStatus]
	@user_id				INT,
	@modification_user_id	INT,
	@comments				VARCHAR(50)
AS
BEGIN
	SET NOCOUNT ON
	BEGIN TRY
		BEGIN TRAN;
		UPDATE	dbo.[User] 
		SET		is_active =~ is_active,
				modification_date = GETDATE(),
				modification_user_id = @modification_user_id,
				comments = @comments
		WHERE	[user_id] = @user_id
		COMMIT TRAN;

		SELECT
			success  = 1,
			error	 = 0,
			msg		 = 'El usuario fue activado/desactivado correctamente.',
			'user_id' = @user_id;
	END TRY
	BEGIN CATCH
		ROLLBACK TRAN;
		SELECT
			success = 0,
			error	= 1,
			msg		= ERROR_MESSAGE();
	END CATCH
END