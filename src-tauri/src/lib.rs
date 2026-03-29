// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    print!("Hello, {}! You've been greeted from Rust!", name);
    return format!("Hello, {}! You've been greeted from Rust!", name);
}

#[tauri::command]
fn create_directory(path: &str) -> Result<String, String> {
    use std::fs;
    use std::path::Path;

    let dir_path = Path::new(path);

    // Verifica se o caminho é válido
    if dir_path.as_os_str().is_empty() {
        return Err("O caminho está vazio ou inválido.".to_string());
    }

    // Verifica se já existe
    if dir_path.exists() {
        return Err("A pasta já existe.".to_string());
    }

    // Verifica permissão de escrita no diretório pai
    if let Some(parent) = dir_path.parent() {
        if !parent.exists() {
            return Err("O diretório pai não existe.".to_string());
        }
        if fs::metadata(parent)
            .map_err(|_| "Não foi possível acessar o diretório pai.".to_string())?
            .permissions()
            .readonly()
        {
            return Err("Sem permissão para criar a pasta no diretório pai.".to_string());
        }
    } else {
        return Err("Caminho sem diretório pai válido.".to_string());
    }

    // Tenta criar a pasta
    fs::create_dir_all(dir_path).map_err(|e| format!("Erro ao criar a pasta: {}", e))?;

    Ok("Pasta criada com sucesso.".to_string())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .plugin(
            tauri_plugin_log::Builder::new()
                .level(tauri_plugin_log::log::LevelFilter::Info)
                .build(),
        )
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, create_directory])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
