import java.sql.Connection;

public class Main {
    public static void main(String[] args) {
        // Conectar a la base de datos
        Connection conexion = ConexionBD.conectar();
        
        // Aquí puedes añadir lógica para gestionar productos y servicios desde la base de datos.
        
        // Desconectar de la base de datos
        ConexionBD.desconectar(conexion);
    }
}
